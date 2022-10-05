import { useRouter } from "next/router";

export default function MarketPage() {
  const router = useRouter();

  return (
    <>
      market List Page
      <button
        onClick={() => {
          router.push("/market/new");
        }}
      >
        등록페이지로 이동!
      </button>
      <button
        onClick={() => {
          router.push("/market/detail");
        }}
      >
        상세페이지로 이동!
      </button>
    </>
  );
}
