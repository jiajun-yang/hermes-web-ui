import type { GlobalThemeOverrides } from "naive-ui"

export const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#2563eb",
    primaryColorHover: "#1d4ed8",
    primaryColorPressed: "#1e40af",
    primaryColorSuppl: "#2563eb",
    bodyColor: "#f8fafc",
    cardColor: "#ffffff",
    modalColor: "#ffffff",
    popoverColor: "#ffffff",
    tableColor: "#ffffff",
    inputColor: "#ffffff",
    actionColor: "#f1f5f9",
    textColorBase: "#0f172a",
    textColor1: "#0f172a",
    textColor2: "#475569",
    textColor3: "#94a3b8",
    dividerColor: "#e2e8f0",
    borderColor: "#e2e8f0",
    hoverColor: "rgba(37, 99, 235, 0.06)",
    borderRadius: "8px",
    borderRadiusSmall: "6px",
    fontSize: "14px",
    fontSizeMedium: "14px",
    heightMedium: "36px",
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    fontFamilyMono: "JetBrains Mono, Fira Code, Consolas, monospace"
  },
  Layout: {
    color: "#f8fafc",
    siderColor: "#ffffff",
    headerColor: "#f8fafc"
  },
  Menu: {
    itemTextColorActive: "#2563eb",
    itemTextColorActiveHover: "#1d4ed8",
    itemTextColorChildActive: "#2563eb",
    itemIconColorActive: "#2563eb",
    itemIconColorActiveHover: "#1d4ed8",
    itemColorActive: "rgba(37, 99, 235, 0.08)",
    itemColorActiveHover: "rgba(37, 99, 235, 0.12)",
    arrowColorActive: "#2563eb"
  },
  Button: {
    textColorPrimary: "#ffffff",
    colorPrimary: "#2563eb",
    colorHoverPrimary: "#1d4ed8",
    colorPressedPrimary: "#1e40af"
  },
  Input: {
    color: "#ffffff",
    colorFocus: "#ffffff",
    border: "1px solid #e2e8f0",
    borderHover: "1px solid #94a3b8",
    borderFocus: "1px solid #2563eb",
    placeholderColor: "#94a3b8",
    caretColor: "#2563eb"
  },
  Card: {
    color: "#ffffff",
    borderColor: "#e2e8f0"
  },
  Modal: {
    color: "#ffffff"
  },
  Tag: {
    borderRadius: "6px"
  },
  Switch: {
    railColor: "#e2e8f0",
    railColorActive: "#2563eb",
    loadingColor: "#3b82f6",
    opacityDisabled: 0.4
  }
}

export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#3b82f6",
    primaryColorHover: "#60a5fa",
    primaryColorPressed: "#93c5fd",
    primaryColorSuppl: "#3b82f6",
    bodyColor: "#0f172a",
    cardColor: "#1e293b",
    modalColor: "#1e293b",
    popoverColor: "#1e293b",
    tableColor: "#1e293b",
    inputColor: "#1e293b",
    actionColor: "#1e293b",
    textColorBase: "#f1f5f9",
    textColor1: "#f1f5f9",
    textColor2: "#cbd5e1",
    textColor3: "#64748b",
    dividerColor: "#334155",
    borderColor: "#334155",
    hoverColor: "rgba(59, 130, 246, 0.1)",
    borderRadius: "8px",
    borderRadiusSmall: "6px",
    fontSize: "14px",
    fontSizeMedium: "14px",
    heightMedium: "36px",
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    fontFamilyMono: "JetBrains Mono, Fira Code, Consolas, monospace"
  },
  Layout: {
    color: "#0f172a",
    siderColor: "#1e293b",
    headerColor: "#0f172a"
  },
  Menu: {
    itemTextColorActive: "#60a5fa",
    itemTextColorActiveHover: "#93c5fd",
    itemTextColorChildActive: "#60a5fa",
    itemIconColorActive: "#60a5fa",
    itemIconColorActiveHover: "#93c5fd",
    itemColorActive: "rgba(59, 130, 246, 0.12)",
    itemColorActiveHover: "rgba(59, 130, 246, 0.18)",
    arrowColorActive: "#60a5fa"
  },
  Button: {
    textColorPrimary: "#ffffff",
    colorPrimary: "#3b82f6",
    colorHoverPrimary: "#60a5fa",
    colorPressedPrimary: "#93c5fd"
  },
  Input: {
    color: "#1e293b",
    colorFocus: "#1e293b",
    border: "1px solid #334155",
    borderHover: "1px solid #64748b",
    borderFocus: "1px solid #3b82f6",
    placeholderColor: "#64748b",
    caretColor: "#3b82f6"
  },
  Card: {
    color: "#1e293b",
    borderColor: "#334155"
  },
  Modal: {
    color: "#1e293b"
  },
  Tag: {
    borderRadius: "6px"
  },
  Switch: {
    railColor: "#334155",
    railColorActive: "#3b82f6",
    loadingColor: "#60a5fa",
    opacityDisabled: 0.4
  }
}

export function getThemeOverrides(isDark: boolean): GlobalThemeOverrides {
  return isDark ? darkThemeOverrides : lightThemeOverrides
}
