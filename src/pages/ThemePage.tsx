import { Button } from '../components/Button';
import { brandKit } from '../brandkit';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

function ColorBox({ color, label, value }: { color: string; label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full h-24 rounded-lg shadow-md border border-gray-200"
        style={{ backgroundColor: color }}
      ></div>
      <p className="font-semibold text-gray-900">{label}</p>
      <div
        className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={handleCopy}
      >
        <code className="text-sm text-gray-600">{value}</code>
        {copied ? (
          <Check className="w-4 h-4 text-green-600" />
        ) : (
          <Copy className="w-4 h-4 text-gray-400" />
        )}
      </div>
    </div>
  );
}

function FontSizePreview({ size, label }: { size: string; label: string }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white">
      <p className="text-sm font-semibold text-gray-500 mb-3 uppercase">{label}</p>
      <div style={{ fontSize: size }} className="text-gray-900">
        The quick brown fox jumps over the lazy dog
      </div>
      <code className="text-xs text-gray-500 mt-3 block">{size}</code>
    </div>
  );
}

export function ThemePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">Design System</h1>
          <p className="text-xl text-gray-600">
            Complete brand kit reference for MCIM
          </p>
        </div>

        <div className="space-y-16">
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Colors</h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Primary Colors</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <ColorBox
                    color={brandKit.colors.primary.navy}
                    label="Navy"
                    value={brandKit.colors.primary.navy}
                  />
                  <ColorBox
                    color={brandKit.colors.primary.navyLight}
                    label="Navy Light"
                    value={brandKit.colors.primary.navyLight}
                  />
                  <ColorBox
                    color={brandKit.colors.primary.navyDark}
                    label="Navy Dark"
                    value={brandKit.colors.primary.navyDark}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Accent Colors</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <ColorBox
                    color={brandKit.colors.accent.cyan}
                    label="Cyan"
                    value={brandKit.colors.accent.cyan}
                  />
                  <ColorBox
                    color={brandKit.colors.accent.cyanLight}
                    label="Cyan Light"
                    value={brandKit.colors.accent.cyanLight}
                  />
                  <ColorBox
                    color={brandKit.colors.accent.cyanDark}
                    label="Cyan Dark"
                    value={brandKit.colors.accent.cyanDark}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <ColorBox
                    color={brandKit.colors.accent.blue}
                    label="Blue"
                    value={brandKit.colors.accent.blue}
                  />
                  <ColorBox
                    color={brandKit.colors.accent.blueLight}
                    label="Blue Light"
                    value={brandKit.colors.accent.blueLight}
                  />
                  <ColorBox
                    color={brandKit.colors.accent.blueDark}
                    label="Blue Dark"
                    value={brandKit.colors.accent.blueDark}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Neutral Colors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {Object.entries(brandKit.colors.neutral).map(([key, value]) => (
                    <ColorBox key={key} color={value} label={key} value={value} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Buttons</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Primary Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="sm">
                    Small Button
                  </Button>
                  <Button variant="primary" size="md">
                    Medium Button
                  </Button>
                  <Button variant="primary" size="lg">
                    Large Button
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Secondary Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary" size="sm">
                    Small Button
                  </Button>
                  <Button variant="secondary" size="md">
                    Medium Button
                  </Button>
                  <Button variant="secondary" size="lg">
                    Large Button
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Outline Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" size="sm">
                    Small Button
                  </Button>
                  <Button variant="outline" size="md">
                    Medium Button
                  </Button>
                  <Button variant="outline" size="lg">
                    Large Button
                  </Button>
                </div>
              </div>

              <div className="bg-[#0A1628] rounded-lg p-8">
                <h3 className="text-lg font-semibold text-white mb-4">Buttons on Dark Background</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="md">
                    Primary
                  </Button>
                  <Button variant="secondary" size="md">
                    Secondary
                  </Button>
                  <Button variant="outline" size="md">
                    Outline
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Typography</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Font Sizes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(brandKit.typography.fontSize).map(([key, value]) => (
                    <FontSizePreview key={key} size={value} label={key} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Font Weights</h3>
                <div className="space-y-4">
                  {Object.entries(brandKit.typography.fontWeight).map(([key, weight]) => (
                    <div key={key} style={{ fontWeight: weight }}>
                      <span className="font-semibold text-gray-600 mr-4">{key}:</span>
                      The quick brown fox jumps over the lazy dog ({weight})
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Line Heights</h3>
                <div className="space-y-6">
                  {Object.entries(brandKit.typography.lineHeight).map(([key, lineHeight]) => (
                    <div key={key} className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                      <p className="text-sm font-semibold text-gray-600 mb-3">{key}</p>
                      <p style={{ lineHeight }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. ({lineHeight})
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Spacing System</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Section Spacing</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {Object.entries(brandKit.spacing.section).map(([key, value]) => (
                    <div key={key} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div
                        className="bg-[#00D9C0] rounded mb-4"
                        style={{ height: value }}
                      ></div>
                      <p className="font-semibold text-gray-900">{key}</p>
                      <code className="text-xs text-gray-600">{value}</code>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Container Sizes</h3>
                <div className="space-y-3">
                  {Object.entries(brandKit.spacing.container).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-gray-100 rounded-lg p-4 border border-gray-200"
                    >
                      <p className="font-semibold text-gray-900">{key}</p>
                      <code className="text-sm text-gray-600">{value}</code>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Border Radius</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {Object.entries(brandKit.borderRadius).map(([key, radius]) => (
                    <div key={key} className="text-center">
                      <div
                        className="w-20 h-20 mx-auto bg-[#0066FF] mb-3"
                        style={{ borderRadius: radius }}
                      ></div>
                      <p className="text-sm font-semibold text-gray-900">{key}</p>
                      <code className="text-xs text-gray-600">{radius}</code>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Shadows</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {Object.entries(brandKit.shadows).map(([key, shadow]) => (
                <div key={key} className="text-center">
                  <div
                    className="w-full h-32 bg-white rounded-lg mb-4"
                    style={{ boxShadow: shadow }}
                  ></div>
                  <p className="font-semibold text-gray-900 mb-2">{key}</p>
                  <code className="text-xs text-gray-600 block break-words">{shadow}</code>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
