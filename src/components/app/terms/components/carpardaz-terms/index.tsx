import { Card, Content, Text } from '@/components/app/terms/components/@shared/blocks';

import { pageLevelLocalization } from '@/constant/localization';

const { terms: termsLocalization } = pageLevelLocalization;

export default function CarpardazTerms() {
  return (
    <Card>
      <Content title={termsLocalization.carpardazTerms.part1Head}>
        {termsLocalization.carpardazTerms.part1.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </Content>
      <Content title={termsLocalization.carpardazTerms.part2Head}>
        {termsLocalization.carpardazTerms.part2.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </Content>
    </Card>
  );
}
