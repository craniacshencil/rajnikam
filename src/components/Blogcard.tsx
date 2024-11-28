interface blogCardInputs {
  title: string;
  date: Date;
  excerpt: string;
}

const Blogcard: React.FC<blogCardInputs> = ({ title, date, excerpt }) => {
  console.log("card created");
  return (
    <div>
      <div>{title}</div>
      <div>{date.toString()}</div>
      <div>{excerpt}</div>
    </div>
  );
};

export default Blogcard;
