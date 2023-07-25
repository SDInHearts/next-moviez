'use client';

import NextLink from '@/routing/NextLink';
import { Button, ButtonProps } from '@mui/material';

type ButtonLinkProps = ButtonProps<
  typeof NextLink,
  { component?: typeof NextLink }
>;

export default function ButtonLink(props: ButtonLinkProps) {
  return <Button<typeof NextLink> {...props} component={NextLink} />;
}
