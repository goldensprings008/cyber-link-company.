// helpers.js
// ---------------------------------------------------------
// Small reusable helper functions for Cyber Link Company.
//
// These functions keep common logic out of individual
// components and pages.
// ---------------------------------------------------------

// ---------------------------------------------------------
// Create a URL-friendly slug
// ---------------------------------------------------------

export function createSlug(value) {
  if (!value) {
    return ''
  }

  return value
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
}

// ---------------------------------------------------------
// Capitalize the first letter of a string
// ---------------------------------------------------------

export function capitalize(value) {
  if (!value) {
    return ''
  }

  return value.charAt(0).toUpperCase() + value.slice(1)
}

// ---------------------------------------------------------
// Check whether a value exists
// ---------------------------------------------------------

export function isDefined(value) {
  return value !== undefined && value !== null
}

// ---------------------------------------------------------
// Safely return an array
//
// Useful when working with data that may be missing.
// ---------------------------------------------------------

export function ensureArray(value) {
  return Array.isArray(value) ? value : []
}

// ---------------------------------------------------------
// Format a number with commas
//
// Example:
// 1000000 → 1,000,000
// ---------------------------------------------------------

export function formatNumber(value) {
  const number = Number(value)

  if (Number.isNaN(number)) {
    return '0'
  }

  return number.toLocaleString()
}

// ---------------------------------------------------------
// Create a simple delay
//
// Useful later for loading states or small async flows.
// ---------------------------------------------------------

export function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds)
  })
}