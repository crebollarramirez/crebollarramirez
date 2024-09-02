import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubCommits = ({ username, token }) => {
  const [commitCount, setCommitCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommitCount = async () => {
      try {
        const repos = await axios.get(`https://api.github.com/users/${username}/repos`, {
          headers: {
            Authorization: token ? `token ${token}` : undefined,
          },
        });

        let totalCommits = 0;

        const commitPromises = repos.data.map(async (repo) => {
          const commits = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/commits`, {
            headers: {
              Authorization: token ? `token ${token}` : undefined,
            },
          });
          totalCommits += commits.data.length;
        });

        await Promise.all(commitPromises);

        setCommitCount(totalCommits);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCommitCount();
  }, [username, token]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Total Commits: {commitCount}</h2>
    </div>
  );
};

export default GitHubCommits;
