import React from 'react';
import { Button, Card, Badge } from './index';

const ComponentsDemo = () => {
  return (
    <div className="new-architecture" style={{ padding: 'var(--space-8)', backgroundColor: 'var(--fafih-background)', minHeight: '100vh' }}>
      <div className="ui-container-lg">
        <h1 style={{ color: 'var(--fafih-primary)', fontFamily: 'var(--font-family-secondary)', textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          Demonstração dos Componentes UI - FAFIH
        </h1>
        <p style={{ color: 'var(--fafih-text)', textAlign: 'center', marginBottom: 'var(--space-8)', fontSize: 'var(--font-size-lg)' }}>
          Esta página demonstra os componentes base do design system implementado na Fase 1, compatíveis com o design original da FAFIH.
        </p>

        {/* Button Demo */}
        <section style={{ marginBottom: 'var(--space-8)' }}>
          <h2 style={{ color: 'var(--fafih-secondary)', fontFamily: 'var(--font-family-secondary)', marginBottom: 'var(--space-4)' }}>
            Buttons
          </h2>
        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginBottom: 'var(--space-4)' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginBottom: 'var(--space-4)' }}>
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button fullWidth>Full Width</Button>
        </div>
      </section>

      {/* Badge Demo */}
      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2>Badges</h2>
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-4)' }}>
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-4)' }}>
          <Badge size="xs">XS</Badge>
          <Badge size="sm">SM</Badge>
          <Badge size="md">MD</Badge>
          <Badge size="lg">LG</Badge>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <Badge rounded>Rounded</Badge>
          <Badge variant="primary" rounded>Primary Rounded</Badge>
        </div>
      </section>

      {/* Card Demo */}
      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2>Cards</h2>

        <div style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <Card>
            <Card.Header>
              <h3>Card Default</h3>
            </Card.Header>
            <Card.Content>
              <p>Este é um card padrão com header e content. Demonstra a estrutura básica dos cards no design system.</p>
            </Card.Content>
            <Card.Footer>
              <Button size="sm">Ação</Button>
              <Badge variant="primary">Nova</Badge>
            </Card.Footer>
          </Card>

          <Card variant="primary" hover>
            <Card.Header>
              <h3>Card Primary com Hover</h3>
            </Card.Header>
            <Card.Content>
              <p>Este card tem variante primary e efeito hover ativado. Passe o mouse sobre ele para ver o efeito.</p>
            </Card.Content>
          </Card>

          <Card variant="outline" shadow="lg">
            <Card.Content>
              <h3>Card Outline</h3>
              <p>Card com variante outline e sombra grande, sem header ou footer.</p>
              <div style={{ marginTop: 'var(--space-4)' }}>
                <Badge variant="success" size="sm">Status</Badge>
              </div>
            </Card.Content>
          </Card>

          <Card variant="ghost" padding="lg">
            <Card.Content>
              <h3>Card Ghost</h3>
              <p>Card fantasma com padding grande, ideal para conteúdo minimalista.</p>
            </Card.Content>
          </Card>
        </div>
      </section>

      {/* Design Tokens Demo */}
      <section>
        <h2>Design Tokens</h2>
        <div style={{ display: 'grid', gap: 'var(--space-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <Card>
            <Card.Header>
              <h4>Cores Primárias</h4>
            </Card.Header>
            <Card.Content>
              <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                <div style={{ width: '30px', height: '30px', backgroundColor: 'var(--color-primary-500)', borderRadius: 'var(--radius-md)' }}></div>
                <div style={{ width: '30px', height: '30px', backgroundColor: 'var(--color-primary-600)', borderRadius: 'var(--radius-md)' }}></div>
                <div style={{ width: '30px', height: '30px', backgroundColor: 'var(--color-primary-800)', borderRadius: 'var(--radius-md)' }}></div>
              </div>
            </Card.Content>
          </Card>

          <Card>
            <Card.Header>
              <h4>Spacing Scale</h4>
            </Card.Header>
            <Card.Content>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <div style={{ height: 'var(--space-2)', backgroundColor: 'var(--color-secondary-300)', borderRadius: 'var(--radius-sm)' }}></div>
                <div style={{ height: 'var(--space-4)', backgroundColor: 'var(--color-secondary-400)', borderRadius: 'var(--radius-sm)' }}></div>
                <div style={{ height: 'var(--space-6)', backgroundColor: 'var(--color-secondary-500)', borderRadius: 'var(--radius-sm)' }}></div>
              </div>
            </Card.Content>
          </Card>

          <Card>
            <Card.Header>
              <h4>Typography</h4>
            </Card.Header>
            <Card.Content>
              <p style={{ fontSize: 'var(--font-size-sm)', lineHeight: 'var(--line-height-normal)' }}>Small text</p>
              <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-normal)' }}>Base text</p>
              <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-normal)' }}>Large text</p>
            </Card.Content>
          </Card>
        </div>
        </section>
      </div>
    </div>
  );
};

export default ComponentsDemo;