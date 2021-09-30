import Button from "@mui/material/Button";
import { useState } from "react";
import { useFetch } from "../hooks/hooks";

export default function Exercise3() {
  const [query, setQuery] = useState("");

  const url = query && `https://api.reddit.com/r/${query}`;

  const { status, data } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = e.target.search.value;
    if (query) {
      setQuery(query);
      e.target.search.value = "";
    }
  };

  const posts = data.data;

  function formatData(body) {
    if (body?.children) {
      return body.children.map((child) => (
        <div className="child" key={child.data.created}>
          <a
            target="_blank"
            href={`https://www.reddit.com${child.data.permalink}`}
            rel="noopener noreferrer"
          >
            {child.data.title}
          </a>
          <br />
          <small>by {child.data.author}</small>
        </div>
      ));
    }
  }

  return (
    <div className="main">
      <h2>Exercise #3</h2>
      <pre>{`
// Using hooks, fetches data from fetchUrl
// When the component re-renders, it should not re-fetch the data.

const fetchUrl = 'http://httpbin.org/anything';

const Component = (props) => {
  return (
    <div>
      {/* Render the fetched data */}
    </div>
  );
};

     `}</pre>
      <p>
        You can see how I handled this in <code>components/Exercise-3.js</code>{" "}
        and <code>hooks.js</code>, but the short solution is to utilize{" "}
        <code>useReducer</code> and <code>useEffect</code>.
      </p>
      <p>
        <code>useEffect</code> accepts props/state values that allows shallow
        comparison to take place, which prevents re-renders unless a dependency
        has changed. Other solutions to this could be using the provider design
        pattern with <code>useMemo</code> or <code>useCallback</code>
      </p>
      <p>
        Below, there is a simple form that you can put a subreddit name into. If
        the subreddit has posts, you will see a basic list of posts from{" "}
        <code>api.reddit.com</code>
      </p>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            autoFocus
            autoComplete="off"
            name="search"
            placeholder="Enter reddit sub ex. news"
          />
          <Button variant="outlined"> Search </Button>
        </form>
      </div>

      {status === "fetched" ? formatData(posts) : ""}
    </div>
  );
}
