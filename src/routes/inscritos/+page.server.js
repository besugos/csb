import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("records").select().order('created_at', { ascending: false });
  return {
    records: data ?? [],
  };
}

// export async function load() {
//   try {
//       const response = await fetch("https://script.google.com/macros/s/AKfycbzKNqP-4snb5lwfkhYbWhR3wWJPriYV6OP4r2tLFviLz6hnDcQgbY0eNspPO7p28OymEA/exec");
//       const { saida } = await response.json();

//       return {
//           records: saida ?? [],
//       };
//   } catch (error) {
//       console.error("Erro ao carregar registros:", error);
//       return {
//           records: [],
//       };
//   }
// }

// export async function load() {
//   try {
//       const response = await fetch("https://script.google.com/macros/s/AKfycbzKNqP-4snb5lwfkhYbWhR3wWJPriYV6OP4r2tLFviLz6hnDcQgbY0eNspPO7p28OymEA/exec");
//       if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

//       const data = await response.json();
//       return {
//           records: data.saida ?? [],
//       };
//   } catch (error) {
//       console.error("Erro ao carregar registros:", error);
//       return {
//           records: [],
//           error: "Erro ao carregar registros"
//       };
//   }
// }

