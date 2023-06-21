import { Fragment } from "preact";

interface AvatarProps {
  src?: string;
}

export default function Avatar({ src }: AvatarProps) {
  return (
    <Fragment>
      {src === undefined
        ? (
          <img
            class="w-10 h-10 rounded-full"
            src={"/image/defaultAvater.png"}
          />
        )
        : <img class="w-10 h-10 rounded-full" src={src} alt="Rounded avatar" />}
    </Fragment>
  );
}
