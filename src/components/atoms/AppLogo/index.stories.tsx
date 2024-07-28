import { CompenentMeta } from '@storybook/react'
import AppLogo from './index'

export default { title: 'Atoms/AppLogo' } as CompenentMeta<typeof AppLogo>

export const Logo = () => <AppLogo />