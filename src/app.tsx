import Header from "@/components/header/index";
import "./app.css";

async function getPost(id: number) {
  const data = await fetch(`http://localhost:3000/posts/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data));

  return data;
}

export function App() {
  const post = getPost(1);
  console.log(post);

  return (
    <>
      <Header />
    </>
  );
}
