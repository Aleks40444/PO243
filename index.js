// ... твой старый код (инициализация Firebase и прочее) ...

// --- ФУНКЦИЯ №3: ПОИСК ПО EMAIL ---
async function findRequestsByEmail(userEmail) {
    const q = query(collection(db, "requests"), where("email", "==", userEmail));
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log("Результаты поиска:", results);
    return results;
}

// --- ФУНКЦИЯ №5: УДАЛЕНИЕ ПО ID ---
async function deleteRequestById(requestId) {
    const docRef = doc(db, "requests", requestId);
    await deleteDoc(docRef);
    console.log("Документ удален:", requestId);
}

// --- ПРИМЕР ВЫЗОВА (чтобы проверить работу) ---
// Можешь временно добавить это, чтобы при загрузке страницы удалился тест
// deleteRequestById("1V9PgSwg1rOl3T5Tyjwg");
