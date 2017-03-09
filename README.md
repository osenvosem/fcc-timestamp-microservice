# Free Code Camp Timestamp Microservice project
___

### Try


- [/1489067104299](https://fcc-ts-ms-osenvosem.herokuapp.com/1489067104299)
- [/Dec-02-2016](https://fcc-ts-ms-osenvosem.herokuapp.com/Dec-02-2016)
- [/2015-12-02](https://fcc-ts-ms-osenvosem.herokuapp.com/2015-12-02)


Or any string that may be parsed with `new Date(string)`.

The service returns response in JSON format, like this:

```json
{
  "unix": 1164920400000,
  "natural": "December 01, 2006"
}
```

If the date passed in is incorrect the service returns:

```json
{
  "unix": null,
  "natural": null
}
```