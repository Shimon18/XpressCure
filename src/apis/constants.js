export const POST = "POST"
export const PUT = "PUT"
export const GET = "GET"


const prod = {
    url: {
     API_URL: "https://voip-api.herokuapp.com"
   },
   google_auth__client_id : "800309844896-n925k10bd1lmn04k3u436mpmgbivku9r.apps.googleusercontent.com"
}

const dev = {
    url: {
     API_URL: "http://localhost:8000"
    },
    google_auth__client_id : "800309844896-n925k10bd1lmn04k3u436mpmgbivku9r.apps.googleusercontent.com"
}

// export const config =  prod
export const config = process.env.NODE_ENV === "development" ? dev : prod;