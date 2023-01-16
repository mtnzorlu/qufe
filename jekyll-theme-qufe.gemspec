# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-qufe"
  spec.version       = "0.1.1"
  spec.authors       = ["Metin Zorlu"]
  spec.email         = ["metinzorlu@msn.com"]

  spec.summary       = "Personal oriented blog theme"
  spec.homepage      = "https://github.com/mtnzorlu/qufe"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
