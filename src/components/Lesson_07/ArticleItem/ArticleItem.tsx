export interface Article {
  objectID: string;
  url: string;
  title: string;
  story_title: string;
  story_url: string;
}

function ArticleItem({ url, title, story_title, story_url }: Article) {
  return (
    <a href={url || story_url} target="_blank" rel="noreferrer noopener">
      {title || story_title}
    </a>
  );
}
export default ArticleItem;

/*
{
    "_highlightResult": {
        "author": {
            "matchLevel": "none",
            "matchedWords": [],
            "value": "dwwoelfel"
        },
        "title": {
            "fullyHighlighted": false,
            "matchLevel": "full",
            "matchedWords": [
                "react"
            ],
            "value": "Relicensing <em>React</em>, Jest, Flow, and Immutable.js"
        },
        "url": {
            "matchLevel": "none",
            "matchedWords": [],
            "value": "https://code.facebook.com/posts/300798627056246"
        }
    },
    "_tags": [
        "story",
        "author_dwwoelfel",
        "story_15316175"
    ],
    "author": "dwwoelfel",
    "children": [
        15316191,

        15328623
    ],
    "created_at": "2017-09-22T21:51:56Z",
    "created_at_i": 1506117116,
    "num_comments": 498,
    "objectID": "15316175",
    "points": 2280,
    "story_id": 15316175,
    "title": "Relicensing React, Jest, Flow, and Immutable.js",
    "updated_at": "2024-09-20T01:22:28Z",
    "url": "https://code.facebook.com/posts/300798627056246"
}
*/
