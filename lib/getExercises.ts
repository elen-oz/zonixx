// export const getExercises = async () => {
//     const baseUrl = process.env.VERCEL_URL
//         ? `https://${process.env.VERCEL_URL}`
//         : "http://localhost:3000";
//
//     const response = await fetch(`${baseUrl}/api/exercises`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
//
//     if (!response.ok) {
//         throw new Error("Failed to fetch exercises");
//     }
//
//     const data = await response.json();
//     return data || [];
// };