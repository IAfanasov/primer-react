import React from 'react'
import {UnderlineNav} from '../../deprecated'
import {render} from '../../utils/testing'
import {render as HTMLRender} from '@testing-library/react'
import {axe, toHaveNoViolations} from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('UnderlineNav.Link', () => {
  it('renders an <a> by default', () => {
    expect(render(<UnderlineNav.Link />).type).toEqual('a')
  })

  it('should have no axe violations', async () => {
    const {container} = HTMLRender(<UnderlineNav.Link href="www.github.com">Go to GitHub</UnderlineNav.Link>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
