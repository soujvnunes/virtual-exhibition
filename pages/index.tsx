import { Button } from "ui";
import Link from "next/link";
import { Main } from "containers";

export default function Home() {
  return (
    <Main title="UFAL 60 Anos">
      <Link href="/dedication">dedication</Link>
      <Button>test</Button>
    </Main>
  );
}
