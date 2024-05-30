// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, PrivateSet } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
      <PrivateSet wrap={ScaffoldLayout} unauthenticated="home">
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Set title="Stacks" titleTo="stacks" buttonLabel="New Stack" buttonTo="newStack">
          <Route path="/stacks/new" page={StackNewStackPage} name="newStack" />
          <Route path="/stacks/{id}/edit" page={StackEditStackPage} name="editStack" />
          <Route path="/stacks/{id}" page={StackStackPage} name="stack" />
          <Route path="/stacks" page={StackStacksPage} name="stacks" />
        </Set>
      </PrivateSet>
    </Router>
  )
}

export default Routes
