import { getMaxListeners } from "process"

describe('Web', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should render a welcome message on page load ', () => {
    cy.contains('Welcome to Crate')
  })

  it('should render a next button on page load', () => {
    cy.get('.jsx-1228826222')
  })

  it('should change page view on click', () => {
    cy.get('.jsx-1228826222').click()
    cy.get(':nth-child(2) > .jsx-3315563251')
    cy.contains('For Men')

    cy.get('.jsx-1228826222').click()
    cy.contains('For Women')
  })

  it('should allow user to view the start subsciptions page', () => {
    cy.get('.jsx-1228826222').click()
    cy.get(':nth-child(2) > .jsx-3315563251')
    cy.contains('For Men')

    cy.get('.jsx-1228826222').click()
    cy.contains('For Women')

    cy.get('.jsx-1228826222').click()
    cy.contains('Fix me up')
  })

  it('should show the user a home page with nav bar', () => {
    cy.get('.jsx-1228826222').click()
    cy.get(':nth-child(2) > .jsx-3315563251')
    cy.contains('For Men')

    cy.get('.jsx-1228826222').click()
    cy.contains('For Women')

    cy.get('.jsx-1228826222').click()
    cy.contains('Fix me up')

    cy.get('.jsx-1228826222').click()
    cy.contains('Your monthly subscription of trendy clothes and accessories')
  })

  it('should render a navbar with buttons on click', () => {
    cy.get('.jsx-1228826222').click()
    cy.get(':nth-child(2) > .jsx-3315563251')
    cy.contains('For Men')

    cy.get('.jsx-1228826222').click()
    cy.contains('For Women')

    cy.get('.jsx-1228826222').click()
    cy.contains('Fix me up')

    cy.get('.jsx-1228826222').click()
    cy.contains('Your monthly subscription of trendy clothes and accessories')

    cy.get('header')
    cy.contains('Crate')

    cy.get('[href="/men"]')
    cy.get('[href="/women"]')
    cy.get('[href="/how-it-works"]')
    cy.get('[href="/whats-new"]')
    cy.get('[href="/user/login"]')
    cy.get('[style="text-align: right;"] > div > [href="/user/signup"]')
  })

  it('should allow the user to sign in and view available subscription options', () => {
    cy.get('.jsx-1228826222').click()
    cy.get(':nth-child(2) > .jsx-3315563251')
    cy.contains('For Men')

    cy.get('.jsx-1228826222').click()
    cy.contains('For Women')

    cy.get('.jsx-1228826222').click()
    cy.contains('Fix me up')

    cy.get('.jsx-1228826222').click()
    cy.contains('Your monthly subscription of trendy clothes and accessories')

    cy.get('[href="/user/login"]').click()
    cy.get('[style="width: 25em; margin: 0px auto;"] > :nth-child(1) > .jsx-3002558909').type('exampleexample@gmail.com')
    cy.get(':nth-child(2) > .jsx-3002558909').type('thisisthepassword')
    cy.get('.jsx-2258186958').click()
  })

  it('should render crate options after logging in', () => {
    cy.get('.jsx-1228826222').click()
    cy.get(':nth-child(2) > .jsx-3315563251')
    cy.contains('For Men')

    cy.get('.jsx-1228826222').click()
    cy.contains('For Women')

    cy.get('.jsx-1228826222').click()
    cy.contains('Fix me up')

    cy.get('.jsx-1228826222').click()
    cy.contains('Your monthly subscription of trendy clothes and accessories')

    cy.get('[href="/user/login"]').click()
    cy.get('[style="width: 25em; margin: 0px auto;"] > :nth-child(1) > .jsx-3002558909').type('exampleexample@gmail.com')
    cy.get(':nth-child(2) > .jsx-3002558909').type('thisisthepassword')
    cy.get('.jsx-2258186958').click()

    cy.get('[style="background-color: rgb(240, 240, 240);"] > .jsx-230203545').contains('Crates for everyone!')
    cy.get(':nth-child(2) > .jsx-230203545')
    cy.get(':nth-child(1) > .jsx-996704199 > div > .jsx-3563202483')
    cy.get(':nth-child(1) > .jsx-996704199 > div > .jsx-3563202483')
  })

  it('should allow the user to take a suvery after subscribing', () => {
    cy.get('.jsx-1228826222').click()
    cy.get(':nth-child(2) > .jsx-3315563251')
    cy.contains('For Men')

    cy.get('.jsx-1228826222').click()
    cy.contains('For Women')

    cy.get('.jsx-1228826222').click()
    cy.contains('Fix me up')

    cy.get('.jsx-1228826222').click()
    cy.contains('Your monthly subscription of trendy clothes and accessories')

    cy.get('[href="/user/login"]').click()
    cy.get('[style="width: 25em; margin: 0px auto;"] > :nth-child(1) > .jsx-3002558909').type('exampleexample@gmail.com')
    cy.get(':nth-child(2) > .jsx-3002558909').type('thisisthepassword')
    cy.get('.jsx-2258186958').click()
    cy.get(':nth-child(2) > .jsx-996704199 > div > [style="text-align: center; margin-top: 1.5em; margin-bottom: 1em;"] > .jsx-1228826222').click()
  })

  it('should render photos and questions when taking a style survey', () => {
    cy.get('.jsx-1228826222').click()
    cy.get(':nth-child(2) > .jsx-3315563251')
    cy.contains('For Men')

    cy.get('.jsx-1228826222').click()
    cy.contains('For Women')

    cy.get('.jsx-1228826222').click()
    cy.contains('Fix me up')

    cy.get('.jsx-1228826222').click()
    cy.contains('Your monthly subscription of trendy clothes and accessories')

    cy.get('[href="/user/login"]').click()
    cy.get('[style="width: 25em; margin: 0px auto;"] > :nth-child(1) > .jsx-3002558909').type('exampleexample@gmail.com')
    cy.get(':nth-child(2) > .jsx-3002558909').type('thisisthepassword')
    cy.get('.jsx-2258186958').click()

    cy.get(':nth-child(2) > .jsx-230203545')
    cy.get(':nth-child(2) > .jsx-996704199 > div')
    cy.get(':nth-child(2) > .jsx-996704199 > div > [style="text-align: center; margin-top: 1.5em; margin-bottom: 1em;"] > .jsx-1228826222').click()

    cy.get('.jsx-2677644848 > :nth-child(1)')
    cy.get('.jsx-2677644848')
    cy.get('.jsx-3700690931')
  })
})