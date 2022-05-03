import useSWR from "swr";

interface LinkPreviewResponse {
  title: string;
  description: string;
  url: string;
  image: string;
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useLink(link: string) {
  const API_KEY = "b2ecf80d3079ccc66f241365adc3f962";
  const { data } = useSWR<LinkPreviewResponse>(
    `http://api.linkpreview.net/?key=${API_KEY}&q=${link}
  `,
    fetcher
  );

  return {
    data,
  };
}
