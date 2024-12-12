import React, { useEffect, useState } from "react";
import axios from "axios";
import { Number } from "./Number";

export function Numbers() {
  const [commitCount, setCommitCount] = useState(null);
  const [issuesClosed, setIssuesClosed] = useState(null);
  const [projectsCompleted] = useState(5); // Keep as static for now
  const [technologiesMastered] = useState(10); // Keep as static for now

  // Loading states for dynamically fetched numbers
  const [isLoadingCommits, setIsLoadingCommits] = useState(true);
  const [isLoadingIssues, setIsLoadingIssues] = useState(true);

  const GITHUB_USERNAME = "crebollarramirez";
  const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

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
        // Set to 0 in case of error
        setCommitCount(0);
        setIssuesClosed(0);
      } finally {
        setIsLoadingCommits(false);
        setIsLoadingIssues(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap w-100">
      <Number 
        num={commitCount} 
        description="Code Commits" 
        isLoading={isLoadingCommits} 
      />
      <Number 
        num={issuesClosed} 
        description="Closed Issues" 
        isLoading={isLoadingIssues} 
      />
      <Number 
        num={projectsCompleted} 
        description="Projects Completed" 
      />
      <Number 
        num={technologiesMastered} 
        description="Technologies Mastered" 
      />
    </div>
  );
}