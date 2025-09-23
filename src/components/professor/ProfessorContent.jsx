import React from 'react';
import { useParams } from 'react-router-dom';
import { facultyMembers } from '../curso-detalhes/facultyData';
import styles from './Professor.module.css';

const ProfessorContent = () => {
  const { nome } = useParams();
  const professor = facultyMembers.find(p => p.name.toLowerCase().replace(/ /g, '-') === nome);

  if (!professor) {
    return <div className={styles.loading}>Professor não encontrado.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <img src={professor.photo || 'https://via.placeholder.com/150'} alt={professor.name} className={styles.profileImage} />
        <div className={styles.profileInfo}>
          <h1 className={styles.name}>{professor.name}</h1>
          <p className={styles.title}>{professor.title}</p>
          <div className={styles.contactInfo}>
            {professor.email && <p><strong>Email:</strong> {professor.email}</p>}
            {professor.phone && <p><strong>Telefone:</strong> {professor.phone}</p>}
            {professor.address && <p><strong>Endereço:</strong> {professor.address}</p>}
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <h2>Sobre</h2>
        <p>{professor.description}</p>
      </div>
      {professor.books && professor.books.length > 0 && (
        <div className={styles.booksSection}>
          <h2>Livros Publicados</h2>
          <div className={styles.booksGrid}>
            {professor.books.map((book, index) => (
              <div key={index} className={styles.bookCard}>
                <img src={book.thumbnail} alt={book.title} className={styles.bookThumbnail} />
                <h3 className={styles.bookTitle}>{book.title}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessorContent;
