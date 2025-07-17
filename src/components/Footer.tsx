// D:/KORTEX/SRC/components/Footer.tsx

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500">
        <p>© {currentYear} Kortex. Tous droits réservés.</p>
      </div>
    </footer>
  );
}