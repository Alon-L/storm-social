import React from 'react';
import ReactMarkdown from 'react-markdown';

const tos = `
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eaque harum impedit libero, qui
reprehenderit. Ab aut corporis, deserunt facilis harum inventore iure pariatur quam quod sapiente similique
vitae voluptate?<br /><br />
Aut commodi consequatur consequuntur culpa debitis delectus facilis inventore iste iure laudantium maxime
modi numquam odio, officiis perferendis quasi quo recusandae repellendus tempora voluptatum? Cum iusto
praesentium voluptas voluptate! Cupiditate.
Animi, blanditiis consectetur corporis debitis deleniti doloribus eaque error explicabo fugiat, iusto minus
numquam qui quia quisquam suscipit velit, vero voluptatem voluptatibus. Ipsum, numquam, officiis! At commodi
consectetur culpa maxime.<br /><br />
Ad alias cumque eveniet labore minima nesciunt quae quod repellendus sed vel! Consequatur distinctio dolor
dolorum ex fuga labore laborum magni molestiae necessitatibus nihil obcaecati officiis placeat, quae totam
voluptatibus.<br /><br />
Accusamus aliquam animi, aperiam atque consequatur deleniti ea id, inventore itaque maxime minus natus
necessitatibus placeat, quisquam ratione reiciendis rem rerum sapiente similique soluta totam unde voluptatem.
Dolor harum, quia.
`;

const Tos: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-5xl font-semibold text-center mb-12">
        Terms of Service
      </h1>
      <ReactMarkdown source={tos} escapeHtml={false} />
    </div>
  );
};

export default Tos;
