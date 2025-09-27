import { Link, useLocation } from 'react-router-dom';
import styles from './not-found.module.css';

const NotFoundPage = () => {
  const location = useLocation();
  const from = location.state?.from;

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.media}>
          <div className={styles.iconWrapper} aria-hidden="true">
            <span className={styles.icon}>404</span>
          </div>
        </div>
        <div className={styles.content}>
          <span className={styles.tag}>Página não encontrada</span>
          <h1 className={styles.title}>Ops, não encontramos este conteúdo.</h1>
          <p className={styles.description}>
            {from
              ? `O curso "${from}" não está disponível no momento ou foi removido do catálogo.`
              : 'O endereço acessado pode estar incorreto ou a página foi removida.'}
            Explore outras opções e continue sua jornada com a FAFIH.
          </p>
          <div className={styles.actions}>
            <Link to="/escolha-cursos" className={styles.primaryBtn}>
              Ver outros cursos
            </Link>
            <Link to="/" className={styles.secondaryBtn}>
              Voltar para o início
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
