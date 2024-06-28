import React from "react";

import { Text } from "../../../components/typography/text.components";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";

export const CheckoutSuccessScreen = () => (
  <SafeArea>
    <CartIconContainer>
      <CartIcon icon="check-bold" />
      <Text variant="label">Success!</Text>
    </CartIconContainer>
  </SafeArea>
);