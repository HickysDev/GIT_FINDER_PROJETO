import {ReposProps} from "../types/repos";
import {BsCodeSlash} from "react-icons/bs";
import {AiOutlineStar, AiOutlineFork} from "react-icons/ai";
import {RiGitRepositoryLine} from "react-icons/ri";
import {CiCalendar} from "react-icons/ci";

import classes from "./Repo.module.css";

const Repo = ({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
  created_at,
}: ReposProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${day}/${month}/${year}`;
  };

  return (
    <div className={classes.repo}>
      <h3>{name}</h3>
      <p className={classes.language}>
        <CiCalendar />
        {formatDate(created_at)}
      </p>
      <p className={classes.language}>
        <BsCodeSlash />
        {language}
      </p>
      <div className={classes.stats}>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <a href={html_url} target="_blank" className={classes.repo_btn}>
        <span>Ver código</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
};

export default Repo;
