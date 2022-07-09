const Font = () => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: `<link
rel="stylesheet"
media="none"
href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&display=swap"
onload="if(media!='all')media='all'"
/>`,
        }}
      />
      <noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&display=swap"
        />
      </noscript>
    </>
  );
};

export default Font;
