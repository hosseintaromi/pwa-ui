import { Card, Content, Text } from '@/components/app/terms/components/@shared/blocks';

import { pageLevelLocalization } from '@/constant/localization';

const { terms: termsLocalization } = pageLevelLocalization;

export default function ItollTerms() {
  return (
    <Card>
      <Content title={termsLocalization.itollTerms.title}>
        {termsLocalization.itollTerms.terms.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </Content>
    </Card>
  );
}
