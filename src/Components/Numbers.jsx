import React, { useEffect, useState } from "react";
import axios from "axios";
import Number from "./Number";
import data from "../portfolio_data.json";
import { useLanguage } from "./LanguageContext";

const Numbers = ({ styles = "" }) => {
  const { language } = useLanguage();
  const [commitCount, setCommitCount] = useState(null);
  const [issuesClosed, setIssuesClosed] = useState(null);

  // Loading states for dynamically fetched numbers
  const [isLoadingCommits, setIsLoadingCommits] = useState(true);
  const [isLoadingIssues, setIsLoadingIssues] = useState(true);

  const GITHUB_USERNAME = "crebollarramirez";
  const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  const fetchRepos = async () => {
    const response = await axios.get(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
      {
        headers: {
          Authorization: TOKEN ? `token ${TOKEN}` : undefined,
        },
      }
    );
    return response.data;
  };

  const fetchCommits = async (repo) => {
    try {
      const response = await axios.get(
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
      return response.data.length;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        console.warn(
          `Repository ${repo.name} has no commits or another conflict occurred.`
        );
        return 0;
      } else {
        throw error;
      }
    }
  };

  const fetchEvents = async () => {
    const response = await axios.get(
      `https://api.github.com/users/${GITHUB_USERNAME}/events`,
      {
        headers: {
          Authorization: TOKEN ? `token ${TOKEN}` : undefined,
        },
      }
    );
    return response.data.filter((event) => event.type === "PushEvent");
  };

  const fetchIssuesClosed = async () => {
    const response = await axios.get(
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
    return response.data.total_count;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [repos, events, issuesClosedCount] = await Promise.all([
          fetchRepos(),
          fetchEvents(),
          fetchIssuesClosed(),
        ]);

        let totalCommits = 0;
        let totalIssuesClosed = issuesClosedCount;

        const commitPromises = repos.map((repo) => fetchCommits(repo));
        const commitsResults = await Promise.all(commitPromises);
        totalCommits += commitsResults.reduce((acc, count) => acc + count, 0);

        events.forEach((event) => {
          totalCommits += event.payload.size; // size is the number of commits in the push
        });

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
    <div className={styles}>
      <Number
        num={commitCount}
        description={language === "EN" ? "Total Commits" : "Commits Totales"}
        isLoading={isLoadingCommits}
      />
      <Number
        num={issuesClosed}
        description={language === "EN" ? "Closed Issues" : "Issues Cerrados"}
        isLoading={isLoadingIssues}
      />
      <Number num={data.projects[language].length} description={language === "EN" ? "Projects Completed" : "Proyectos Completados"} />
      <Number
        num={data.technologies_mastered}
        description={language === "EN" ? "Technologies Mastered" : "Tecnologías Dominadas"}
      />
    </div>
  );
};

export default Numbers;