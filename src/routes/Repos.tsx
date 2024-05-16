import classes from "./Repos.module.css";
import BackBtn from "../components/BackBtn";
import Loader from "../components/Loader";
import Repo from "../components/Repo";

import {ReposProps} from "../types/repos";

import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

const Repos = () => {
  const {username} = useParams();

  const [repos, setRepos] = useState<ReposProps[] | [] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadRepos = async function (username: string) {
      setIsLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      setIsLoading(false);

      //Ordeno por mais stars
      let orderedRepos = data.sort(
        (a: ReposProps, b: ReposProps) =>
          b.stargazers_count - a.stargazers_count
      );

      orderedRepos = orderedRepos.slice(0, 5);

      setRepos(orderedRepos);
    };

    

    if (username) {
      loadRepos(username);
    }
  }, []);

  if (!repos && isLoading) return <Loader />;

  return (
    <div className={classes.repos}>
      <BackBtn />
      <h2>Explore os repositórios de {username}</h2>
      {repos && repos.length === 0 && <p>Não há repositórios.</p>}
      {repos && repos.length > 0 && (
        <div className={classes.repos_container}>
          {repos.map((repos: ReposProps) => (
            <Repo key={repos.name} {...repos} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Repos;
