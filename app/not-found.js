import { ErrorComponent } from '@/components/General/ErrorRender';
import { ContentSize, Section } from '@/components/UI/Section';

export const metadata = {
  title: '404 - Page not found',
};

export default async function NotFound() {
  return (
    <html>
      <body style={{ backgroundColor: '#272727'}}>
        <Section>
          <ContentSize>
            <ErrorComponent />
          </ContentSize>
        </Section>
      </body>
    </html>
  )
}