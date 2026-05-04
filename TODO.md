# Task: Fix API Endpoints (MongoDB ✅, Register, Login, Products)

**Progress: 0/5 steps completed**

## Step 1: Fix productRoutes.js duplicate import (SyntaxError) ✅
- Removed duplicate import and cleaned route structure

## Step 2: Fix User model validation ✅
- Added `required: true`, validation, `select: false` on password

## Step 3: Delete duplicate `src/controllers/userControllers.js` ✅
- Removed redundant file (userRoutes uses userController.js)

## Step 4: Test core endpoints ☐
- `npm run dev` → Check "Conectado a MongoDB"
- POST /api/users/register → 200 + user created
- POST /api/users/login → 200 + JWT token
- GET /api/products → 200 + [] or products

## Step 5: Optional seed data for products ☐

**Next Action**: Fix crash first, then test server start.

