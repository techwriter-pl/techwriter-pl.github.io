import React from "react";

export type AuthorProps = {
  id: string;
  name: string;
  role: string;
  url?: string;
  image_url?: string;
};

export default function AuthorAvatar({
  name,
  role,
  url,
  image_url,
}: AuthorProps) {
  return (
    <div className="avatar">
      <a
        className="avatar__photo-link avatar__photo avatar__photo--lg"
        href={url}
      >
        <img
          alt={`kliknij, żeby przeczytać więcej o redaktorze ${name}`}
          src={image_url || "https://github.com/techwriter-pl.png"}
        />
      </a>
      <div className="avatar__intro">
        <div className="avatar__name">{name}</div>
        <small className="avatar__subtitle">{role}</small>
      </div>
    </div>
  );
}
