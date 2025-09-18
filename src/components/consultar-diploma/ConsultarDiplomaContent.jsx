import { useState } from 'react';
import styles from './ConsultarDiploma.module.css';

const ConsultarDiplomaContent = () => {
  const [formData, setFormData] = useState({
    registro: '',
    rg: '',
    cpf: '',
    nascimento: '',
    validacao: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form data submitted:', formData);
  };

  const handleReset = () => {
    setFormData({
      registro: '',
      rg: '',
      cpf: '',
      nascimento: '',
      validacao: ''
    });
  };

  return (
    <section className={styles.pageSection}>
      <div className={styles.container}>
        <h1>Consulta de Diplomas</h1>
        <p className={styles.introText}>Este é um portal público de consulta de diplomas emitidos pela FAFIH. Aqui você consulta toda a nossa base de diplomas emitidos e registrados de todos os níveis de ensino. Use-o para validar um diploma que esteja em suas mãos.</p>

        <div className={styles.searchFormContainer}>
          <h2>Busca de Diploma</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.searchGroup}>
              <div className={styles.formField}>
                <label htmlFor="registro">Número de Registro</label>
                <input 
                  type="text" 
                  id="registro" 
                  name="registro" 
                  value={formData.registro}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="rg">RG</label>
                <input 
                  type="text" 
                  id="rg" 
                  name="rg" 
                  value={formData.rg}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={styles.separator}>OU</div>

            <div className={styles.searchGroup}>
              <div className={styles.formField}>
                <label htmlFor="cpf">CPF</label>
                <input 
                  type="text" 
                  id="cpf" 
                  name="cpf" 
                  value={formData.cpf}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="nascimento">Data de Nascimento</label>
                <input 
                  type="date" 
                  id="nascimento" 
                  name="nascimento" 
                  value={formData.nascimento}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={styles.separator}>OU</div>

            <div className={styles.searchGroup}>
              <div className={styles.formField}>
                <label htmlFor="validacao">Código de Validação</label>
                <input 
                  type="text" 
                  id="validacao" 
                  name="validacao" 
                  value={formData.validacao}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={styles.formActions}>
              <button type="submit" className={`${styles.btnForm} ${styles.btnPrimary}`}>Filtrar</button>
              <button type="button" className={`${styles.btnForm} ${styles.btnOutline}`} onClick={handleReset}>Nova Consulta</button>
            </div>
          </form>
        </div>

        <p className={styles.infoText}>Este Portal de Consulta Pública de Diplomas da FAFIH foi construído de acordo com a Portaria 1095, emitida pelo Ministério da Educação em 25/10/18. A FAFIH propiciará a visualização da autenticidade do documento pelos Conselhos Profissionais, Egressos e Empregadores, tanto dos diplomados a partir da Portaria, quanto de toda a sua base de diplomados, proporcionando agilidade aos processos de confirmação de veracidade do documento e provendo transparência ao processo de Registro de Diplomas.</p>

        <div className={styles.buttonContainer}>
          <a href="/" className={`${styles.btnForm} ${styles.btnOutline}`}>Voltar</a>
        </div>
      </div>
    </section>
  );
};

export default ConsultarDiplomaContent;