# Free Code Camp :: Timestamp Microservice challenge
___

[Homepage](https://fcc-ts-ms-osenvosem.herokuapp.com) | [Github](https://github.com/osenvosem/fcc-timestamp-microservice)

### Try

- <a href="https://fcc-ts-ms-osenvosem.herokuapp.com/1489067104299" target="_blank">/1489067104299</a>
- <a href="https://fcc-ts-ms-osenvosem.herokuapp.com/Dec-02-1980" target="_blank">/Dec-02-1980</a>
- <a href="https://fcc-ts-ms-osenvosem.herokuapp.com/2028-03-17" target="_blank">/2028-03-17</a>


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
