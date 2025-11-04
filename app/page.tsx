import Detail from "@/components/Detail";
import Form from "@/components/Form";
import Jumbotron from "@/components/Jumbotron";
import Performers from "@/components/Performers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "McGilbert 橋爪紋佳 つかT Xmas Cafe Live",
  openGraph: {
    title: "McGilbert 橋爪紋佳 つかT Xmas Cafe Live",
    siteName: "McGilbert 橋爪紋佳 つかT Xmas Cafe Live",
    type: "website",
    description: "ライブチケットのお申し込みはこちらから",
    url: "https://christmas-cafe-live-tenere.space",
    images: "https://christmas-cafe-live-tenere.space/assets/background.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@kuma_ga_suki",
  },
};

export default function Home() {
  const date = (
    <>
      <p>2025年12月21日(日)</p>
      <p>14:30 Open</p>
      <p>15:00 Start</p>
    </>
  );

  const ticket = (
    <>
      <p>3,500円 (1ドリンク・デザート付き)</p>
      <p>小学生以下 1,500円 (1ドリンク・デザート付き)</p>
    </>
  );

  const place = (
    <>
      <p>Cafe テネレの木</p>
      <p>茨城県守谷市大柏1114-2</p>
      <p>(つくばエクスプレス 守谷駅より徒歩22分)</p>
      <br />
      <p>
        <a
          target="_blank"
          style={{ color: "#1a0dab" }}
          href="https://maps.app.goo.gl/VKCbKWqLYUwC5aKz9"
        >
          Google Mapを開く
        </a>
      </p>
    </>
  );

  const notes = (
    <>
      <p>
        ・お席に限りがございます。お越しの際は、事前のご予約をお願いいたします。
      </p>
    </>
  );
  return (
    <>
      {/* <Header /> */}
      <Jumbotron title="" subtitle="" />
      <div className="pb-8" />
      <Performers />
      <div className="p-0 text-slate-700 font-body">
        <Detail
          title="McGilbert 橋爪紋佳 つかT Xmas Cafe Live"
          date={date}
          ticket={ticket}
          place={place}
          notes={notes}
        />
        {/* <Notes /> */}

        <Form
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSe10_OF4fTMHZqtbFP0LcNXj0-P8RFdFVR-ikfqwN4J9rhDjQ/viewform?usp=pp_url&entry.1537262346=0%E4%BA%BA&entry.1791064844=0%E4%BA%BA"
          }
        />
      </div>
    </>
  );
}
