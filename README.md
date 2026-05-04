# 🚀 SENATI Store API

## 📋 Descripción
API REST para tienda online SENATI usando Node.js, Express, MongoDB y JWT.

**Estado**: ✅ **Funcionando perfectamente en localhost:3000**

## 🛠️ Instalación

```bash
# Clonar repositorio
git clone <repo-url>
cd senati-store-api

# Instalar dependencias
npm install

# Configurar .env
cp .env.example .env  # o crear manualmente

# Iniciar servidor
npm run dev
```

## Configuración (.env)
```
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/senati_db
JWT_SECRET=tu-super-secreto-jwt-key-super-larga
PORT=3000
```

## Endpoints Disponibles (localhost:3000)

###Usuarios**
| Método | Endpoint | Descripción | Body |
|--------|----------|-------------|------|
| `POST` | `/api/users/register` | **Crear usuario** | `{"name": "Juan", "email": "juan@test.com", "password": "123456"}` |
| `POST` | `/api/users/login` | **Login + JWT token** | `{"email": "juan@test.com", "password": "123456"}` |

**Respuesta Login:**
```json
{
  "message": "Login exitoso",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

##Productos

| `GET` | `/api/products` | **Listar productos** (vacío `[]` OK) | `?category=ID&search=term` |
| `GET` | `/api/products/:id` | Producto por ID | - |

**Admin protegidos** (`Authorization: Bearer <token>`):
- `POST /api/products` Crear
- `PUT /api/products/:id` Actualizar  
- `DELETE /api/products/:id` Eliminar

###Categorías** (admin)
```
POST /api/categories
GET /api/categories
```

##Pruebas Rápidas (curl)

```bash
# 1. Registrar
curl -X POST http://localhost:3000/api/users/register \
-H "Content-Type: application/json" \
-d '{"name":"Test","email":"test@example.com","password":"123456"}'

# 2. Login (copia TOKEN)
curl -X POST http://localhost:3000/api/users/login \
-H "Content-Type: application/json" \
-d '{"email":"test@example.com","password":"123456"}'

# 3. Productos
curl http://localhost:3000/api/products
```



##Estructura
```
src/
├── controllers/     # Lógica endpoints
├── models/          # Mongoose schemas  
├── routes/          # Rutas Express
├── middlewares/     # JWT auth
└── index.js         # Server
```

## Troubleshooting
- **MongoDB error**: Verifica MONGO_URI
- **JWT error**: Configura JWT_SECRET
- **Server crash**: `npm run dev` reinicia auto

**Creado por BLACKBOXAI** 
