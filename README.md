# Timestamp Microservice API

Parses a date string and returns a JSON with unix epoch time and the natural date

## Example usage

`https://timestampms-fcc.glitch.me/12-21-2012`

`https://timestampms-fcc.glitch.me/December%2012,%202012`

## Example output
```
{
  "unix"    : 1356028200000,
  "natural" : "December 21, 2012"
}
```
