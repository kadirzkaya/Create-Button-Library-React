import React from 'react'

import { Button } from 'coderbtn'
import 'coderbtn/dist/index.css'

const App = () => {
  return  <div>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <Button type="link">Link</Button>

          </div>
}

export default App
