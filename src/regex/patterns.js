import { makeReadOnly } from '../utils'

export const RegexLib = {}

RegexLib.Email =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

RegexLib.Tel = {
  BR: /^(\+\d{2})?[-. ]?(\d{2}?|\d{0})?(\(\d{2}\)|\d{0})?[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?$/,
}

RegexLib.CPF =
  /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/

/** (DD MM YYYY || DD-MM-YYYY || DD.MM.YYYY) */
RegexLib.DDMMYYYY =
  /^(0?[1-9]|[12][0-9]|3[01])([ \/\-\.])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?$/

RegexLib.HexColor = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/

RegexLib.Slug = /^[a-z0-9-]+$/

RegexLib.ThousandSeparator = /\d{1,3}(?=(\d{3})+(?!\d))/g

RegexLib.ModeratePassword =
  /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/

RegexLib.StrongPassword =
  /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/

makeReadOnly(RegexLib)
