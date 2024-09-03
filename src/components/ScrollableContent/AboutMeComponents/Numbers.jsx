import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../../../styles/numbers.css";
import { Number } from "./Number";


export function Numbers() {
  const [commitCount, setCommitCount] = useState(0);
  const [issuesClosed, setIssuesClosed] = useState(0);
  const GITHUB_USERNAME = "crebollarramirez";
  const TOKEN = import.meta.env.VITE_GITHUB_TOKEN
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch your repositories
        const repoResponse = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
          {
            headers: {
              Authorization: TOKEN ? `token ${TOKEN}` : undefined,
            },
          }
        );

        const repos = repoResponse.data;
        let totalCommits = 0;
        let totalIssuesClosed = 0;

        // Fetch commits and issues closed for each repo
        const commitPromises = repos.map(async (repo) => {
          try {
            // Fetch commits where the author is you
            const commitsResponse = await axios.get(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits`,
              {
                headers: {
                  Authorization: TOKEN ? `token ${TOKEN}` : undefined,
                },
                params: {
                  author: GITHUB_USERNAME,
                },
              }
            );

            totalCommits += commitsResponse.data.length;

            // Fetch issues closed by you
            const issuesResponse = await axios.get(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/issues`,
              {
                headers: {
                  Authorization: TOKEN ? `token ${TOKEN}` : undefined,
                },
                params: {
                  state: "closed",
                  creator: GITHUB_USERNAME,
                },
              }
            );

            totalIssuesClosed += issuesResponse.data.length;
          } catch (error) {
            if (error.response && error.response.status === 409) {
              console.warn(
                `Repository ${repo.name} has no commits or another conflict occurred.`
              );
            } else {
              throw error;
            }
          }
        });

        // Include commits from public events (repositories you contributed to)
        const eventsResponse = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/events`,
          {
            headers: {
              Authorization: TOKEN ? `token ${TOKEN}` : undefined,
            },
          }
        );

        const pushEvents = eventsResponse.data.filter(
          (event) => event.type === "PushEvent"
        );

        pushEvents.forEach((event) => {
          totalCommits += event.payload.size; // size is the number of commits in the push
        });

        // Fetch issues closed in all repositories where you are involved
        const searchIssuesResponse = await axios.get(
          `https://api.github.com/search/issues`,
          {
            headers: {
              Authorization: TOKEN ? `token ${TOKEN}` : undefined,
            },
            params: {
              q: `is:issue is:closed author:${GITHUB_USERNAME}`,
            },
          }
        );

        totalIssuesClosed += searchIssuesResponse.data.total_count;

        await Promise.all(commitPromises);

        setCommitCount(totalCommits);
        setIssuesClosed(totalIssuesClosed);
      } catch (error) {
        console.error("Error fetching data from GitHub:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="numbers-container">
      <Number num={commitCount} descrition={"Code Commits"} />
      <Number num={issuesClosed} descrition={"Closed Issues"} />
      <Number num={15} descrition={"Projects Completed"} />
      <Number num={12} descrition={"Technologies Mastered"} />
    </div>
  );
}
