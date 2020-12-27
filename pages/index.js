import Header from "../components/Header";
import Layout from "../components/Layout";
import { useState } from "react";
import Map from "../components/Map";
import MapWrap from "../components/MapWrap";

export default function Home({ data }) {
  const [locationData, setLocationData] = useState({ ...data });

  return (
    <Layout title="IP-Tracker">
      <Header {...locationData} setLocationData={setLocationData} />
      <MapWrap {...locationData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://geo.ipify.org/api/v1?apiKey=at_kbPdCKzyvjussFGcZZJFz4vZj2FHI&ipAddress=209.226.104.217"
  );
  const data = await res.json();
  return {
    props: { data },
  };
}
