
import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";

const Article = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
					<div className="homepage-article-date">
						|&nbsp;&nbsp;&nbsp;{<h1>I Try to learn new skill and Problem solving </h1>}
					</div>
					<div className="homepage-article-title">{"Leetcode && Codechef"}</div>
					<div className="homepage-article-description">
						{"I solve more than 300 Problem on leedcode  and different different platforms"}
					</div>
					
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;