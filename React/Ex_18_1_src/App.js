import React from "react";
import Text from "./components/Text";
import "./App.css";

const content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo mollitia impedit, voluptates aspernatur consectetur molestias ad, praesentium reiciendis vitae fuga natus tempora, perferendis dignissimos amet quae officiis illum dicta odit.";

export default function App() {
  return (
    <div>
      <Text content={content} maxLength={30} />
    </div>
  );
}
