// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([{ "id": 1, "title": "Descríbemos tu inmueble", "description": "No te preocupes de su estado, ni de reparaciones para eneseñarlo" }, { "id": 2, "title": "Recibe una oferta en 24 horas", "description": "Piénsatela!" }, { "id": 3, "title": "Dinos hasta cuando quieres quedarte", "description": "Nos ajustamos a tus necesidades, cuando tu estés listo nosotros también lo estaremos" }, { "id": 4, "title": "Ya está!", "description": "Firma la venta y recibe el dinero" }])
}
