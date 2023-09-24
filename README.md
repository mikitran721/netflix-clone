# Cai dat

- ex: prisma
- cai thu vien `npm i -D prisma`
- cai prisma for client `npm i @prisma/client`
- cai `npm i next-auth`
- cai `npm i bcrypt` them hashed cho password & `npm i -D @types/bcrypt`
- cai `npm i axios`
- cai `npm i react-icons`
- cai `npm i @next-auth/prisma-adapter`
- cai `npm i cookies`
- cai `npm i swr` hook fetching data.
- cai dat `npm i lodash` vs `npm i -D @types/lodash`

## luu y cai dat

- can init prisma: `npx prisma init`; #neu co folder prisma/schema se ko dung dc code nay
- sau khi dinh nghia model can push len DB.server `npx prisma db pull`
- generate Prisma client `npx prisma generate`
- sau cac buoc tren co the query data tu DB.server

## Huy khong commit file .env.\*

```javascript
git rm env.local --cached
git rm env.staging --cached
git commit -m "Stopped tracking env.local, and env.staging"
```

# Noi dung

- tao giao dien login/register
- tao schema.prisma; ket noi **MongoDB**
- day schema len MongoDb `npx prisma db push`
- tao API `nextauth`, `register`
- tao api `sinIn`
- su dung `openssl rand base64 32` de tao secret code
- ap dung google & githup login
- cau hinh auth cho google & next-auth, search `google developer console`
- tai `redirect URIs` nhap `http://localhost:3000/api/auth/callback/google`
- logout & redirect 'auth'
- profile page; layout for Navbar

# sua loi `getUserByAccount` prisma-mongodb-next.auth

- cai `npm install @auth/mongodb-adapter mongodb`
- bo sung code: `lib\mongodb.ts` & `types\mongodb.d.ts`
- link huong dan: https://authjs.dev/reference/adapter/mongodb#installation
- Link github: https://github.com/vercel/next.js/blob/canary/examples/with-mongodb/types/mongodb.d.ts
- Them config vao file `[...nextauth].ts`

## noi dung thu hien

- component `Billboard`,`MovieList`

# gio hoc

`1:20:00`
