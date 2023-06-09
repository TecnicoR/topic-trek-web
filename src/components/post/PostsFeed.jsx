import React, { useState } from "react";
import { Post } from "./Post";
import { Paper, Typography } from "@mui/material";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";

export const PostsFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
  ]);
  return (
    <>
      <Paper>
        <Typography
          variant="h5"
          style={{
            textTransform: "capitalize",
            fontWeight: "bold",
            marginBottom: "10px",
            //   borderBottom: "2px solid #000",
          }}
        >
          Top Blogs for Today <DynamicFeedIcon fontSize="large" />
        </Typography>
        <div
          style={{
            maxWidth: "100%",
          }}
        >
          {posts?.map((v, k) => {
            return <Post key={k} post={v} />;
          })}
        </div>
      </Paper>
    </>
  );
};
