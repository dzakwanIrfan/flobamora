import { articles } from "@/data/articles";

export default function GetToKnow() {
  return (
    <div
      className={"w-full h-screen left-0 bg-cover bg-center"}
      style={{
        backgroundImage:
          "url('https://cdn.discordapp.com/attachments/1204994105298526220/1210433947452842075/Wendy_Stevian.jpg?ex=65ea8b75&is=65d81675&hm=b186c410b24db5af3b523d583078d2dc114c8bd01cb1d744bf58d80067f09e71&')",
      }}>
      <div
        className={
          "absolute w-full min-h-screen left-0 bg-cover bg-center px-10 mx-auto flex flex-col justify-center items-start gap-4 md:gap-7 bg-black/50"
        }>
        <div
          className={
            "sm:px-0 md:w-full xl:w-3/4 flex flex-col md:flex-row md:mx-auto md:justify-between text-[#FAFAFA]"
          }>
          <div className={"flex flex-col justify-center "}>
            <hr className={"border-white border-2 max-w-[27rem]"} />
            <h2
              className={
                "font-extrabold text-2xl sm:text-4xl md:text-6xl md:mb-4"
              }>
              GET TO KNOW <br /> EAST NUSA TENGGARA
            </h2>
            <a href={"/articles"} className={"font-semibold"}>
              Explore all articles →
            </a>
          </div>
          <div className={"hidden md:block md:w-1/3"}>
            Here are a few things to help you get acquainted with this unique
            province in Indonesia, East Nusa Tenggara (NTT).
          </div>
        </div>
        {articles.map((article, key) => {
          if (key < 2)
            return (
              <ArticleCard
                title={article.title}
                description={
                  article.articleMainDescription[0].length > 300
                    ? article.articleMainDescription[0].substring(0, 300) +
                      "...."
                    : article.articleMainDescription[0]
                }
                imgURL={article.imgURL}
                slug={article.slug}
              />
            );
        })}
      </div>
    </div>
  );
}

function ArticleCard({
  imgURL,
  title,
  description,
  slug,
}: {
  imgURL: string;
  title: string;
  description: string;
  slug: string;
}) {
  return (
    <div
      className={
        "w-full sm:px-0 md:w-full xl:w-3/4 flex flex-col md:flex-row gap-0 md:gap-1 mx-auto"
      }>
      <img
        src={imgURL}
        height={"200px"}
        className={"max-w-[320px] object-cover"}
        alt=""
      />
      <div
        className={
          " w-full text-white rounded-b-lg flex flex-col gap-1 md:ml-5"
        }>
        <a href={`/articles/${slug}`}>
          <h3 className={"text-xl md:text-4xl font-bold"}>{title}</h3>
        </a>
        <p className={"hidden md:block w-3/5"}>{description}</p>
        <a href={`/articles/${slug}`}>
          <span className={"font-semibold mt-3 hidden md:block"}>
            Read More →
          </span>
        </a>
      </div>
    </div>
  );
}
